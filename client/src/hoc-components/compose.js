export default (...funcs) => comp => funcs.reduceRight((wrapped, fn) => fn(wrapped), comp);
