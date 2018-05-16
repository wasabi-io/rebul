import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as NavbarStyle, HTMLComponent, HTMLDivProps} from '../../';

export type NavbarStartProps = HTMLDivProps;

export default class NavbarStart extends React.Component<NavbarStartProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, ...navbarStartProps} = this.props;
        const classNames = ClassNames(NavbarStyle.navbarStart, className);

        return (
            <div className={classNames} role="navigation" aria-label="main navigation" {...navbarStartProps}>
                {children}
            </div>
        );
    }
}
