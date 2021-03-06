import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as TableStyle, HTMLComponent, HTMLTheadProps} from '../../';

export interface THeadProps extends HTMLTheadProps {
    elementRef?: (ref: any) => any;
}

export default class THead extends React.Component<THeadProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...tHeadProps} = this.props;

        const classNames = ClassNames(TableStyle.tr, className);

        return (
            <thead className={classNames} {...tHeadProps} ref={elementRef}>
            {children}
            </thead>
        );
    }
}
