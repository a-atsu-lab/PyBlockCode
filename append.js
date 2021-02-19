Blockly.Python['ifap'] = function(block) {
  var value_ifbool = Blockly.Python.valueToCode(block, 'ifBool', Blockly.Python.ORDER_ATOMIC);
  var statements_ifstate = Blockly.Python.statementToCode(block, 'ifState');
  // TODO: Assemble JavaScript into code variable.
  if(run_flag == 0)
    var code = 'if ' + value_ifbool + ':\n' + statements_ifstate + '\n';
  else
    var code = 'if ' + value_ifbool + '{\n' + statements_ifstate + '}\n';
  return code;
};

Blockly.Python['elifap'] = function(block) {
  var value_elifbool = Blockly.Python.valueToCode(block, 'elifBool', Blockly.Python.ORDER_ATOMIC);
  var statements_elifstate = Blockly.Python.statementToCode(block, 'elifState');
  // TODO: Assemble JavaScript into code variable.
  if(run_flag == 0)
    var code = 'elif ' + value_elifbool + ':\n' + statements_elifstate + '\n';
  else
    var code = 'else if ' + value_elifbool + '{\n' + statements_elifstate + '}\n';
  return code;
};

Blockly.Python['elseap'] = function(block) {
  var statements_elsestate = Blockly.Python.statementToCode(block, 'elseState');
  // TODO: Assemble JavaScript into code variable.
  if(run_flag == 0)
    var code = 'else :\n' + statements_elsestate + '}\n';
  else
    var code = 'else {\n' + statements_elsestate + '}\n';
  return code;
};

Blockly.Python['boolap'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1', Blockly.Python.ORDER_ATOMIC);
  var dropdown_comp = block.getFieldValue('comp');
  var value_var2 = Blockly.Python.valueToCode(block, 'var2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  if(run_flag == 0)
    var code = value_var1　+ ' ' + dropdown_comp + ' ' + value_var2;
  else
    var code = value_var1　+ ' ' + dropdown_comp + ' ' + value_var2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['calcap'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1', Blockly.Python.ORDER_ATOMIC);
  var dropdown_calc = block.getFieldValue('calc');
  var value_var2 = Blockly.Python.valueToCode(block, 'var2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  if(run_flag == 0)
    var code = value_var1 + dropdown_calc + value_var2;
  else
    var code = value_var1 + dropdown_calc + value_var2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['boolap2'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1', Blockly.Python.ORDER_ATOMIC);
  var dropdown_bool2 = block.getFieldValue('bool2');
  var value_var2 = Blockly.Python.valueToCode(block, 'var2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  if(run_flag == 0)
    var code = value_var1 + ' ' + dropdown_bool2 + ' ' + value_var2;
  else{
    if(dropdown_bool2 == 'and')
      var code = value_var1 + ' && ' + value_var2;
    else
      var code = value_var1 + ' || ' + value_var2;  
  }// TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
