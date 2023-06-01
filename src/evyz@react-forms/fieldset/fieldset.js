import { Cell } from "../markup/markup";
import './fieldset.css'

function Fieldset({children, label, wrapperStyles, cellStyles, labelStyles}) {
    return (
        <div className="system_fieldset" style={{...wrapperStyles}}>
            <Cell style={{ boxSizing: 'border-box', width: '100%', border: '1px solid black', ...cellStyles }}>
                <label style={{...labelStyles}}>{label}</label>
                {children}
            </Cell>
        </div>

    )
}

export default Fieldset