/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, InnerBlocks } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
import { Icon } from "@wordpress/components";
import { plus, minus } from "@wordpress/icons";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

export default function Edit({ attributes, setAttributes }) {
	const { content } = attributes;
	const blockProps = useBlockProps();
	const [isOpen, setIsOpen] = useState(true);
	const onChangeContent = (newContent) =>
		setAttributes({ content: newContent });

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div {...blockProps}>
			<div className="accordion__editor-item">
				<div
					className="accordion__editor-item-header"
					onClick={toggleAccordion}
				>
					<RichText
						{...blockProps}
						tagName="h4"
						value={content}
						onChange={(newContent) => onChangeContent(newContent)}
						placeholder={__("Accordion Tab Title...")}
					/>
					<Icon
						icon={isOpen ? minus : plus}
						label={isOpen ? __("Close Accordion") : __("Open Accordion")}
					/>
				</div>
				<div {...blockProps}>{isOpen && <InnerBlocks />}</div>
			</div>
		</div>
	);
}
