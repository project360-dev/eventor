import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'

class Eventcomponent extends React.Component {
        state = {
            rows: []
        };
        handleChange = idx => e => {
            const { name, value } = e.target;
            const rows = [...this.state.rows];
            rows[idx] = {
                [name]: value
            };
            this.setState({ rows });
        };
        handleAddRow = () => {
            const item = {
                event: '',
                from: '',
                to: '',
                organizer: '',
                more: ''
            };
            this.setState({
                rows: [
                    ...this.state.rows,
                    item
                ]
            });
        };
        handleRemoveRow = () => {
            this.setState({
                rows: this
                    .state
                    .rows
                    .slice(0, -1)
            });
        };

        render() {

            return ( < > < Table className = "table table-bordered table-hover"
                id = "tab_logic" > < thead > < tr > < th className = "text-center" > # < /th> <
                th className = "text-center" > Event < /th > < th className = "text-center" > From < /th > <
                th className = "text-center" > To < /th > < th className = "text-center" > Organizer < /th > <
                th className = "text-center" > More < /th > < /
                tr > <
                /thead > < tbody > {
                this
                .state
                .rows
                .map((item, idx) => ( < tr id = "addr0"
                        key = {
                            idx
                        } > < td > {
                            idx
                        } < /td> <
                        td >
                        <
                        input type = "text"
                        name = "event"
                        value = { this.state.rows[idx].event }
                        onChange = { this.handleChange(idx) }
                        / > < /
                        td > <
                        td >
                        <
                        input type = "text"
                        name = "from"
                        value = { this.state.rows[idx].from }
                        onChange = { this.handleChange(idx) }
                        / > < /
                        td > <
                        td >
                        <
                        input type = "text"
                        name = "to"
                        value = { this.state.rows[idx].to }
                        onChange = { this.handleChange(idx) }
                        / > < /
                        td > <
                        td >
                        <
                        input type = "text"
                        name = "organizer"
                        value = { this.state.rows[idx].organizer }
                        onChange = { this.handleChange(idx) }
                        / > < /
                        td > <
                        td >
                        <
                        input type = "text"
                        name = "more"
                        value = { this.state.rows[idx].more }
                        onChange = { this.handleChange(idx) }
                        / > < /
                        td > < /tr >))
                    } < /tbody> < /Table > < Button onClick = {
                        this.handleAddRow
                    } > Add < /Button> <
                    Button onClick = { this.handleRemoveRow } >
                    Delete <
                    /Button >  < / >
                );
            }
        }
        export default Eventcomponent;