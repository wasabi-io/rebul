import * as React from "react";
import XDocEditor from "modules/view/editor/XDocEditor";
import pageStyle from "css/pageStyle";

const codes = {
    basic: require("!raw-loader?./code/1-basic"),
    colors: require("!raw-loader?./code/2-colors"),
};

const Index: React.SFC<{}> = () => {
    return (
        <div className={pageStyle.bdContent}>
            <div className={pageStyle.content}>
                <XDocEditor codes={[codes.basic]}/>
                <hr/>
                <XDocEditor vertical={true} title="Colors" codes={[codes.colors]}/>
            </div>
        </div>
    );
};
export default Index;
