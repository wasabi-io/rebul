import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Size, SizeValues } from 'rebul/lib/base/css';

import HTMLComponent, { HTMLSectionProps } from '../../base/html/HTML';
import SectionStyle from './SectionStyle';

export interface SectionProps extends HTMLSectionProps {
    size?: string | Size;
}

const Section: React.SFC<SectionProps> = (props: SectionProps) => {

    const { size, className, ...sectionProps } = props;

    const classNames = ClassNames(
        SectionStyle.section,
        SectionStyle[size],
        className
    );

    return (
        <footer className={classNames} {...sectionProps} >
            {props.children}
        </footer>
    );
};

Section.propTypes = {
    ...HTMLComponent.propTypes,
    size: PropTypes.oneOf(SizeValues)
};

Section.defaultProps = {
    ...HTMLComponent.defaultProps,
};

Section.displayName = "Section";

export default Section;