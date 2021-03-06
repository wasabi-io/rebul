import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {has, Objects, Strings} from 'wasabi-common';
import {Horizontal, horizontalValues} from '../../';
import HTMLComponent, {HTMLIProps} from '../../base/html/HTML';

export enum FaIconSize {
    isXs = 'xs',
    isSm = 'sm',
    isLg = 'lg',
    is2x = '2x',
    is3x = '3x',
    is4x = '4x',
    is5x = '5x',
    is6x = '6x',
    is7x = '7x',
    is8x = '8x',
    is9x = '9x',
    is10x = '10x'
}

export const faIconSizeValues = Objects.values(FaIconSize);

export enum FaIconStyle {
    solid = "fas",
    regular = "far",
    light = "fal",
    brands = "fab"
}

export const faIconStyleValues = Objects.values(FaIconStyle);

export enum FaIconFlip {
    horizontal = "horizontal",
    vertical = "vertical",
}

export const faIconFlipValues = Objects.values(FaIconFlip);

export enum FaIconEffect { spin = 'spin', pulse = 'pulse' }

export const faIconEffectValues = Objects.values(FaIconEffect);

export enum FaIconStack { x1 = '1x', x2 = '2x' }

export const faIconStackValues = Objects.values(FaIconStack);

/**
 * Refers FaIcon Props.
 */
export interface FaIconProps extends HTMLIProps {
    ariaHidden?: boolean;
    border?: boolean;
    effect?: string | FaIconEffect;
    fixed?: boolean;
    flip?: string | FaIconFlip;
    iconStyle?: string | FaIconStyle;
    inverse?: boolean;
    name: string;
    pull?: string | Horizontal;
    rotate?: number;
    bSize?: string | FaIconSize;
    stack?: string | FaIconStack;
    elementRef?: (ref: any) => any;
}

/**
 * FaIcon component
 * <i class="fas fa-home fa-fw" style="background:MistyRose"></i>
 * more https://fontawesome.com/how-to-use/svg-with-js#additional-styling
 */
export default class FaIcon extends HTMLComponent<FaIconProps> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        iconStyle: PropTypes.oneOf(faIconStyleValues),
        ariaHidden: PropTypes.bool,
        border: PropTypes.bool,
        effect: PropTypes.oneOf(faIconEffectValues),
        fixed: PropTypes.bool,
        flip: PropTypes.oneOf(faIconFlipValues),
        inverse: PropTypes.bool,
        name: PropTypes.string.isRequired,
        pull: PropTypes.oneOf(horizontalValues),
        rotate: PropTypes.number,
        bSize: PropTypes.oneOf(faIconSizeValues),
        stack: PropTypes.oneOf(faIconStackValues),
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        ariaHidden: false,
        border: false,
        fixed: false,
        iconStyle: FaIconStyle.solid,
        inverse: false
    };

    public render(): JSX.Element {
        const {
            className,
            ariaHidden,
            border,
            effect,
            fixed,
            flip,
            iconStyle,
            inverse,
            name,
            pull,
            rotate,
            bSize,
            stack,
            elementRef,
            children,
            ...props
        } = this.props;

        const icon = Strings.startsWith(name, "fa-") ? name : `fa-${name}`;

        const classNames = ClassNames(
            iconStyle,
            icon,
            {
                [`fa-flip-${flip}`]: Strings.has(flip),
                [`fa-pull-${pull}`]: Strings.has(pull),
                [`fa-rotate-${rotate}`]: has(rotate),
                [`fa-${bSize}`]: Strings.has(bSize),
                [`fa-stack-${stack}`]: Strings.has(stack),
                [`fa-${effect}`]: Strings.has(effect),
                'fa-border': border,
                'fa-fw': fixed,
                'fa-inverse': inverse
            },
            className
        );
        return (
            <i className={classNames} aria-hidden={ariaHidden} data-fa-transform={flip} {...props} ref={elementRef}>
                {children}
            </i>
        );
    }
}
