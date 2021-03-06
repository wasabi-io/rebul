import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as TableStyle, HTMLComponent, HTMLThProps} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface HCellProps extends HTMLThProps {
    elementRef?: (ref: any) => any;
}

export default class HCell extends React.Component<HCellProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...hCellProps} = this.props;

        const classNames = ClassNames(TableStyle.th, className);

        return (
            <th className={classNames} {...hCellProps} ref={elementRef}>
                {children}
            </th>
        );
    }
}
