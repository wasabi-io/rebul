import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as FormStyle, HTMLComponent, HTMLDivProps, Size, sizeValues} from '../index';

/**
 * Refers Html Props and Additional Props.
 */
export interface FieldBodyProps extends HTMLDivProps {
    bSize?: string | Size;
    elementRef?: (ref: any) => any;
}

export default class FieldBody extends React.Component<FieldBodyProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        bSize: PropTypes.oneOf(sizeValues),
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {
            bSize,
            className,
            children,
            elementRef,
            ...inputProps
        } = this.props;

        const classNames = ClassNames([
            FormStyle.fieldBody,
            FormStyle[bSize],
            className
        ]);

        return (
            <div className={classNames} {...inputProps} ref={elementRef}>
                {children}
            </div>
        );
    }
}
