import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as LevelStyle, HTMLComponent, HTMLElementProps, Responsive, responsiveValues} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface LevelProps extends HTMLElementProps {
    responsive?: Responsive;
    elementRef?: (ref: any) => any;
}

/**
 * A multi-purpose horizontal level, which can contain almost any other element
 */
export default class Level extends React.Component<LevelProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        responsive: PropTypes.oneOf(responsiveValues),
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {responsive, className, children, elementRef, ...levelProps} = this.props;

        const classNames = ClassNames(
            LevelStyle.level,
            LevelStyle[responsive],
            className
        );

        return (
            <nav className={classNames} {...levelProps} ref={elementRef}>
                {children}
            </nav>
        );
    }
}

