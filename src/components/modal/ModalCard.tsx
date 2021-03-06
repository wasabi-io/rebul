import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as ModalStyle, HTMLComponent, HTMLDivProps} from '../../';

export interface ModalCardProps extends HTMLDivProps {
    isActive?: boolean;
    elementRef?: (ref: any) => any;
}

/**
 * A more classic modal, with a head, a body and a foot.
 */
export default class ModalCard extends React.Component<ModalCardProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        isActive: PropTypes.bool,
        elementRef: PropTypes.func
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isActive: false
    };

    public render(): JSX.Element {
        const {isActive, className, children, elementRef, ...modalCardProps} = this.props;

        const classNames = ClassNames(ModalStyle.modal, {[`${ModalStyle.isActive}`]: isActive}, className);

        return (
            <div className={classNames} {...modalCardProps} ref={elementRef}>
                <div className={ModalStyle.modalBackground}/>
                <div className={ModalStyle.modalCard}>
                    {children}
                </div>
            </div>
        );
    }
}
