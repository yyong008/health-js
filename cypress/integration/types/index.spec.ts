/// <reference types="cypress" />
import isArray  from "../../../types/isArray";
import isArrayLike from "../../../types/isArrayLike";

describe("测试数组相关：", () => {
    it("测试类型: isArray 函数", () => {
        let a = [];
        expect(isArray(a)).to.be.true;
    });
    it("测试类型: isArrayLike 函数", () => {
        let aArr = {
            0: 123,
            1: 2234,
            length: 1
        }
        expect(isArrayLike(aArr)).to.be.true;
    });
})


