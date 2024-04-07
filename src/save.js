/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { Icon } from "@wordpress/components";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {string} Markup for the block.
 */
export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	return (
		<div {...blockProps}>
			<div className="accordion__item">
				<h4 className="accordion__item-header">{attributes.content}</h4>
				<div className="accordion__item-body">
					<div {...blockProps}>
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</div>
	);
}
