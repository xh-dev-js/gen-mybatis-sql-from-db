const OracleDialect = require(".");
test('oracle sql to mybatis', () => {
  const x = OracleDialect.OracleSqlToMybatis(`
    defined x= ?
    defined    x   = ckjadf   
    select * from ABC where field1 = &x;
    `);
  expect(OracleDialect.OracleSqlToMybatis(x)).toBe("select * from ABC where field1 = #{x};");
});
test('oracle sql to mybatis field with under score', () => {
  const x = OracleDialect.OracleSqlToMybatis(`
    select * from ABC where field1 = &x and field2 =  &a_b_c
    `);
  expect(OracleDialect.OracleSqlToMybatis(x)).toBe("select * from ABC where field1 = #{x} and field2 =  #{a_b_c}");
});
