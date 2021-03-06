import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as TableStyle, HTMLComponent, HTMLTfootProps} from '../../';


export interface TFootProps extends HTMLTfootProps {
    elementRef?: (ref: any) => any;
}

export default class Class extends React.Component<TFootProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...tFootProps} = this.props;

        const classNames = ClassNames(TableStyle.tfoot, className);

        return (
            <tfoot className={classNames} {...tFootProps} ref={elementRef}>
            {children}
            </tfoot>
        );
    }
}

