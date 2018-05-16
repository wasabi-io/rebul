import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as NavbarStyle, HTMLComponent, HTMLHrProps} from "../../";

export type NavbarDividerProps = HTMLHrProps;

export default class NavbarDivider extends React.Component<NavbarDividerProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, ...inputProps} = this.props;

        const classNames = ClassNames([
            NavbarStyle.navbarDivider,
            className
        ]);

        return (
            <hr className={classNames} {...inputProps}>
                {children}
            </hr>
        );
    }
}
