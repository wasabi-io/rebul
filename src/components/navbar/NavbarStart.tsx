import * as ClassNames from 'classnames';
import * as React from 'react';
import HTMLComponent, {HTMLDivProps} from '../../base/html/HTML';
import NavbarStyle from '../../base/css/bulma';

export type NavbarStartProps = HTMLDivProps;

const NavbarStart: React.SFC<NavbarStartProps> = (props: NavbarStartProps) => {

    const {className, ...navbarStartProps} = props;
    const classNames = ClassNames(NavbarStyle.navbarStart, className);

    return (
        <div className={classNames} role="navigation" aria-label="main navigation" {...navbarStartProps}>
            {props.children}
        </div>
    );
};

NavbarStart.propTypes = HTMLComponent.propTypes;

NavbarStart.defaultProps = HTMLComponent.defaultProps;

NavbarStart.displayName = 'NavbarStart';

export default NavbarStart;
