import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as DropdownStyle, HTMLComponent, HTMLDivProps} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface DropdownContentProps extends HTMLDivProps {
}

export default class DropdownContent extends React.Component<DropdownContentProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {children, className, ...ownProps} = this.props;

        const classNames = ClassNames(
            DropdownStyle.dropdownContent,
            className
        );

        return (
            <div className={classNames} {...ownProps}>
                {children}
            </div>
        );
    }
}
