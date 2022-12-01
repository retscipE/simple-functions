import * as index from '../index'

test("greeter", () => {
    expect(new index.Greeter("Epicster").hello());
    expect(new index.Greeter("Epicster").bye());
})