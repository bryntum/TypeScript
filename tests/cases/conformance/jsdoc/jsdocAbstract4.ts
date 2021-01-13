// @allowJs: true
// @checkJs: true
// @target: esnext
// @declaration: true
// @outDir: out
// @Filename: jsdocAbstract5.js

/** @abstract */
class C1 {
    /** @abstract */
    m() {}

    /** @abstract */
    set p1(value) {}

    /** @abstract */
    get p1() {}
}

/** @abstract */
class C2 {
    /** @abstract */
    m() {
        throw new Error("Method not implemented.")
    }

    /** @abstract */
    set p1(value) {
        throw new Error("Method not implemented.")
    }

    /** @abstract */
    get p1() {
        throw new Error("Method not implemented.")
    }
}

/** @abstract */
class C3 {
    /** @abstract */
    m() {
        /** @type {never} */
        let x;
        return x;
    }

    /** @abstract */
    get p1() {
        /** @type {never} */
        let x;
        return x;
    }
}

/** @abstract */
class C4 {
    /** @abstract */
    m() {
        const x = 1;
        const y = 1;
        return x + y;
    }

    /** @abstract */
    get p1() {
        const x = 1;
        const y = 1;
        return x + y;
    }

    /** @abstract */
    set p1(value) {
        this.p1 = value;
    }
}

/** @abstract */
class C5 {
    /** @abstract */
    m() {
        const x = 1;
        /** @type {never} */
        let y;
        if (x) {
            return x;
        }
        return y;
    }

    /** @abstract */
    get p1() {
        const x = 1;
        /** @type {never} */
        let y;
        if (x) {
            return x;
        }
        return y;
    }
}
