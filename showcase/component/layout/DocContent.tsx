import * as React from "react";
import Stateless from "component/Stateless";
import {Content} from "bambu/lib/elements/content";
import pageStyle from "css/pageStyle";

export default class DocContent extends Stateless<{}> {
    public render() {
        return (
            <div className={pageStyle.bdContent}>
                <Content>
                    <p>
                        Bulma is a <strong>CSS</strong> framework, meaning that the end result is simply a <strong>single</strong> <code>.css</code> file:
                        <br/>
                        <a href="https://github.com/jgthms/bulma/blob/master/css/bulma.css">https://github.com/jgthms
                            <wbr/>/bulma
                            <wbr/>/blob
                            <wbr/>/master
                            <wbr/>/css
                            <wbr/>/bulma.css
                        </a>
                    </p>
                    <p>
                        Because Bulma solely comprises CSS classes, the HTML code you write has <strong>no impact</strong> on the styling of your page. That's why <code>.input</code> exists as a class, so you can choose <em>which</em> <code>&lt;input type="text"&gt;</code> elements you want to style.
                    </p>
                    <p>
                        Bulma only styles <strong>generic</strong> tags directly <strong>twice</strong>:
                    </p>
                    <ul>
                        <li>
                            <a href="https://github.com/jgthms/bulma/blob/master/sass/base/generic.sass"><code>generic.sass</code></a> to define a basic style for your page
                        </li>
                        <li>
                            the <a href="https://bulma.io/documentation/elements/content/"><code>.content</code> class </a> to use for <em>any</em> textual content, like WYSIWYG
                        </li>
                    </ul>
                </Content>
            </div>
        );
    }
}
