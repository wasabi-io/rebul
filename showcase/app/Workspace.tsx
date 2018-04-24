import * as React from 'react';
import {withRouter} from 'react-router-dom';
import {Vertical} from 'bambu/lib/base/css';
import {Navbar, NavbarBrand, NavbarItem} from 'bambu/lib/components/navbar';
import {Container} from 'bambu/lib/elements/container';
import {Icon, IconSize} from 'bambu/lib/elements/icon';
import {SubTitle, Title} from 'bambu/lib/elements/title';
import {Column, Columns} from 'bambu/lib/grid/column';
import {Hero, HeroBody, HeroFoot} from 'bambu/lib/layout/hero';
import Stateless from 'wasabi-ui/lib/Stateless';

import MainNavigation from './MainNavigation';
import locationStore, {LocationProps} from './stores/LocationStore';
import workspaceStyle from './WorkspaceStyle';

export interface WorkspaceProps {
    location?: LocationProps;
}

class Workspace extends Stateless<WorkspaceProps> {
    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div>
                <Navbar isFixed={Vertical.top}>
                    <Container>
                        <NavbarBrand>
                            <NavbarItem href="/bambu">
                                <h1 style={{ fontWeight: 900 }}>
                                    <span style={{color: "#3273dc"}}>BAMBU</span>
                                </h1>
                            </NavbarItem>
                            <NavbarItem href="https://github.com/wasabi-io/bambu" target="_blank">
                                <Icon icon="github" size={IconSize.lg} style={{display: 'inline'}}/>
                            </NavbarItem>
                        </NavbarBrand>
                    </Container>
                </Navbar>

                <div className={workspaceStyle.mainContent}>
                    <Hero className={workspaceStyle.isLink}>
                        <HeroBody>
                            <Container>
                                <Columns isVcentered>
                                    <Column>
                                        <Title style={{color: 'white'}}>Documentation</Title>
                                        <SubTitle style={{color: 'white'}}>
                                            <strong style={{color: 'white'}}>React Web Components</strong> built with  <strong style={{color: 'white'}}>typescript</strong> on top of <strong style={{color: 'white'}}>bulma</strong> css framework
                                        </SubTitle>
                                    </Column>
                                </Columns>
                            </Container>
                        </HeroBody>
                        <HeroFoot>
                            <Container>
                                <MainNavigation/>
                            </Container>
                        </HeroFoot>
                    </Hero>
                    <Container>
                        {this.props.children}
                    </Container>
                </div>
            </div>
        );
    }

    componentWillReceiveProps(nextProps: WorkspaceProps) {
        if (nextProps.location !== this.props.location) {
            this.configure(nextProps.location);
        }
    }

    componentWillMount() {
        this.configure(this.props.location);
    }

    private configure(location: LocationProps) {
        locationStore.setLocation(location);
    }
}

export default withRouter(Workspace);
