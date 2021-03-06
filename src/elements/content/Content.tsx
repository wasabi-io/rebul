import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import HTMLComponent, {HTMLElementProps} from '../../base/html/HTML';
import {bulma as ContentStyle, Size, sizeValues} from '../../';

export interface ContentProps extends HTMLElementProps {
    bSize?: string | Size;
    elementRef?: (ref: any) => any;
}

export default class Content extends React.Component<ContentProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        bSize: PropTypes.oneOf(sizeValues)
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, bSize, children, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames(
            ContentStyle.content,
            ContentStyle[bSize],
            className
        );

        return (
            <div className={classNames} {...inputProps} ref={elementRef}>
                {children}
            </div>
        );
    }
}
