import * as React from "react";
import {BreadCrumb, BreadCrumbItem} from "bambu/lib/components/breadcrumb";
import {Size} from "bambu";

export default class Index extends React.Component<{}, {}> {
    public render() {
        return (
            <BreadCrumb bSize={Size.large}>
                <BreadCrumbItem href="#">Home</BreadCrumbItem>
                <BreadCrumbItem href="#">Documentation</BreadCrumbItem>
                <BreadCrumbItem href="#">Components</BreadCrumbItem>
                <BreadCrumbItem href="#" isActive={true}>Breadcrumb</BreadCrumbItem>
            </BreadCrumb>
        );
    }
}
