import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Objects} from 'wasabi-common';
import ControlLabel, {ControlLabelProps} from './ControlLabel';
import {bulma as FormStyle, HTMLComponent, HTMLDivProps} from '../index';

export enum FieldLabelSize {
    normal = 'isNormal',
    small = 'isSmall',
    medium = 'isMedium',
    large = 'isLarge'
}

/**
 * Refers Html Props and Additional Props.
 */
export interface FieldLabelProps extends HTMLDivProps {
    bSize?: string | FieldLabelSize;
    labelProps?: ControlLabelProps;
    elementRef?: (ref: any) => any;
}

export default class FieldLabel extends React.Component<FieldLabelProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        bSize: PropTypes.oneOf(Objects.values(FieldLabelSize)),
        labelProps: PropTypes.object
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        bSize: FieldLabelSize.normal
    };

    public render(): JSX.Element {
        const {
            bSize,
            className,
            labelProps,
            children,
            elementRef,
            ...inputProps
        } = this.props;

        const classNames = ClassNames([
            FormStyle.fieldLabel,
            FormStyle[bSize],
            className
        ]);

        return (
            <div className={classNames} {...inputProps} ref={elementRef}>
                <ControlLabel {...labelProps}>
                    {children}
                </ControlLabel>
            </div>
        );
    }
}
