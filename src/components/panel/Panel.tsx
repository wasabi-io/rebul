import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as PanelStyle, HTMLComponent, HTMLNavProps} from '../../';

export interface PanelProps extends HTMLNavProps {
}

export default class Panel extends React.Component<PanelProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, ...inputProps} = this.props;

        const classNames = ClassNames([PanelStyle.panel, className]);

        return (
            <nav className={classNames} {...inputProps}>
                {children}
            </nav>
        );
    }
}
