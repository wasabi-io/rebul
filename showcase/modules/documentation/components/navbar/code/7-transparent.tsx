import * as React from "react";
import {Navbar, NavbarBrand, NavbarBurger, NavbarDivider, NavbarEnd, NavbarItem, NavbarLink, NavbarMenu, NavbarStart} from "bambu/lib/components/navbar";
import NavbarDropdown from "bambu/lib/components/navbar/NavbarDropdown";
import {Control, Field} from "bambu/lib/form";
import {Button} from "bambu/lib/elements/button";
import {FaIconStyle} from "bambu/lib/elements/icon";
import {Color} from "bambu";
import {observer} from "mobx-react";
import {observable} from "mobx";

@observer
export default class Index extends React.Component <{}, {}> {
    @observable
    private isActive: boolean = false;

    public render() {
        return (
            <Navbar isTransparent>
                <NavbarBrand>
                    <NavbarItem href="https://bulma.io">
                        <img
                            src="https://bulma.io/images/bulma-logo.png"
                            alt="Bulma: a modern CSS framework based on Flexbox"
                            width="112"
                            height="28"
                        />
                    </NavbarItem>
                    <NavbarBurger onClick={() => this.isActive = !this.isActive}/>
                </NavbarBrand>
                <NavbarMenu isActive={this.isActive}>
                    <NavbarStart>
                        <NavbarItem href="https://bulma.io/">Home</NavbarItem>
                        <NavbarItem hasDropdown isHoverable>
                            <NavbarLink href="/documentation/overview/start/">Docs</NavbarLink>
                            <NavbarDropdown>
                                <NavbarItem href="/documentation/overview/start/">Overview</NavbarItem>
                                <NavbarItem href="https://bulma.io/documentation/modifiers/syntax/">Modifiers</NavbarItem>
                                <NavbarItem href="https://bulma.io/documentation/columns/basics/">Columns</NavbarItem>
                                <NavbarItem href="https://bulma.io/documentation/layout/container/">Layout</NavbarItem>
                                <NavbarItem href="https://bulma.io/documentation/form/general/">Form</NavbarItem>
                                <NavbarDivider/>
                                <NavbarItem href="https://bulma.io/documentation/elements/box/">Elements</NavbarItem>
                                <NavbarItem href="https://bulma.io/documentation/components/breadcrumb/">Form</NavbarItem>
                            </NavbarDropdown>
                        </NavbarItem>
                    </NavbarStart>
                    <NavbarEnd>
                        <NavbarItem>
                            <Field isGrouped>
                                <Control>
                                    <Button
                                        icon="twitter"
                                        iconStyle={FaIconStyle.brands}
                                        className="bd-tw-button"
                                        target="_blank"
                                        href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms"
                                    >
                                        <span>Twitter</span>
                                    </Button>
                                </Control>
                                <Control>
                                    <Button
                                        color={Color.primary}
                                        icon="download"
                                        target="_blank"
                                        href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip"
                                    >
                                        <span>Download</span>
                                    </Button>
                                </Control>
                            </Field>
                        </NavbarItem>
                    </NavbarEnd>
                </NavbarMenu>
            </Navbar>
        );
    }
}
