// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX



export interface ApplicationProps {
    basedir: string
}

export class Application {

    props: ApplicationProps;

    constructor(props: ApplicationProps) {
        this.props = props;

        if (true) {
        }
    }

    //1. load routes and build menus
}