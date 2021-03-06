import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as HeroStyle, HTMLComponent, HTMLSectionProps} from '../../';

export interface HeroBodyProps extends HTMLSectionProps {
    elementRef?: (ref: any) => any;
}

export default class HeroBody extends React.Component<HeroBodyProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...heroBodyProps} = this.props;

        const classNames = ClassNames(
            HeroStyle.heroBody,
            className
        );

        return (
            <section className={classNames} {...heroBodyProps} ref={elementRef}>
                {children}
            </section>
        );
    }
}
