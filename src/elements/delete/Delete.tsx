import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as DeleteStyle, HTMLAllAttributes, HTMLComponent, Size, sizeValues} from '../../';

export interface DeleteProps extends HTMLAllAttributes {
    tagName?: string;
    bSize?: string | Size;
    elementRef?: (ref: any) => any;
}

export default class Delete extends React.Component<DeleteProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        tagName: PropTypes.string,
        bSize: PropTypes.oneOf(sizeValues),
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        tagName: 'a'
    };

    public render(): JSX.Element {
        const {tagName, bSize, className, children, elementRef, ...deleteProps} = this.props;

        const classNames = ClassNames(
            DeleteStyle.delete,
            DeleteStyle[bSize],
            className
        );

        return React.createElement(tagName, {
            className: classNames,
            ref: elementRef,
            ...deleteProps
        }, children);
    }
}

