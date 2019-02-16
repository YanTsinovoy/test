import React from "react";

export default ({ label, inputType, onChange, value, config }) => {
	let component = null;

	switch (inputType) {
		case "textarea": {
			component = <textarea value={value} onChange={onChange} className="input-box__input" {...config} />;
			break;
		}
		case "select": {
			component = (
				<select className="input-box__input" value={value} onChange={onChange} {...config}>
					{config.option.map(el => (
						<option key={el.value} value={el.value}>
							{el.name}
						</option>
					))}
				</select>
			);
			break;
		}
		default:
			component = <input value={value} onChange={onChange} className="input-box__input" {...config} />;
	}

	return (
		<div className="input-box">
			<label className="input-box__label">{label}</label>
			{component}
		</div>
	);
};
