// @target: esnext
// @strictNullChecks: true
// @noImplicitReturns: true
// @noImplicitAny: true

function* g() {}

// https://github.com/microsoft/TypeScript/issues/35105
declare function noop(): void;
declare function f<T>(value: T): void;

function* g2() {
    const value = yield; // error: implicit any
}

function* g3() {
    const value: string = yield; // ok, contextually typed by `value`.
}

function* g4() {
    yield; // ok, result is unused
    yield, noop(); // ok, result is unused
    noop(), yield, noop(); // ok, result is unused
    (yield); // ok, result is unused
    (yield, noop()), noop(); // ok, result is unused
    for(yield; false; yield); // ok, results are unused
    void (yield); // ok, results are unused
}

function* g5() {
    f(yield); // error: implicit any
}

function* g6() {
    f<string>(yield); // ok, contextually typed by f<string>
}

function* g7() {
    const { a } = yield;                 // error: implicit any
    const { b }: { b: string } = yield;  // ok
}

function* g8() {
    const [a] = yield;         // error: implicit any
    const [b]: [string] = yield; // ok
}
