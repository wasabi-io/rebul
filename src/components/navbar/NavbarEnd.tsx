import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as NavbarStyle, HTMLComponent, HTMLDivProps} from "../../";

export interface NavbarEndProps extends HTMLDivProps {
    elementRef?: (ref: any) => any;
}

export default class NavbarEnd extends React.Component<NavbarEndProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...navbarEndProps} = this.props;

        const classNames = ClassNames(NavbarStyle.navbarEnd, className);

        return (
            <div className={classNames} {...navbarEndProps} ref={elementRef}>
                {children}
            </div>
        );
    }
}
