import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from 'wasabi-common';
import {HTMLComponent, HTMLLiProps} from '../../';

/**
 * Refers FaIconListItem Props.
 */
export interface IconStackerProps extends HTMLLiProps {
    listClassName?: string;
    elementRef?: (ref: any) => any;
}


/**
 * FaIconListItem component
 * <li><span class="fa-li">...</span>List icons can</li>
 * more https://fontawesome.com/how-to-use/svg-with-js#additional-styling
 */
export default class IconStacker extends HTMLComponent<IconStackerProps> {
    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render() {
        const {className, elementRef, children, ...props} = this.props;

        const classNames = ClassNames(
            "fa-stack",
            className
        );

        return (
            <span ref={elementRef} className={classNames} {...props}>{children}</span>
        );
    }
}