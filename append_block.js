  Blockly.Blocks['ifap'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("if ");
        this.appendValueInput("ifBool")
            .setCheck("Boolean");
        this.appendDummyInput()
            .appendField(":");
        this.appendStatementInput("ifState")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("if  条件式 : 処理 　条件を満たしたとき、処理を実行する。");
        this.setHelpUrl("");
    }
  };

  Blockly.Blocks['elifap'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("elif ");
      this.appendValueInput("elifBool")
          .setCheck("Boolean");
      this.appendDummyInput()
          .appendField(":");
      this.appendStatementInput("elifState")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
   this.setTooltip("elif  条件式 : 処理 　これまでの if 文の条件は満たさないが、この条件は満たすとき処理を実行する。");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['elseap'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("else :");
      this.appendStatementInput("elseState")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
   this.setTooltip("else : 処理 　どの if 文の条件も満たさないとき、処理を実行する。");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['boolap'] = {
    init: function() {
      this.appendValueInput("var1")
          .setCheck(["Number", "String"]);
      this.appendValueInput("var2")
          .setCheck(["Number", "String"])
          .appendField(new Blockly.FieldDropdown([["==","=="], ["!=","!="], ["<","<"], ["<=","<="], [">",">"], [">=",">="]]), "comp");
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour(210);
   this.setTooltip("== 同じ，!= 異なる，a<b aはb未満，a<=b aはb以下，a>b aはbより大きい，a>=b aはb以上");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['boolap2'] = {
    init: function() {
      this.appendValueInput("var1")
          .setCheck(["Number", "String", "Boolean"]);
      this.appendValueInput("var2")
          .setCheck(["Number", "String", "Boolean"])
          .appendField(new Blockly.FieldDropdown([["and","and"], ["or","or"]]), "bool2");
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour(210);
   this.setTooltip("and 論理積（かつ），or 論理和（または）");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['calcap'] = {
    init: function() {
      this.appendValueInput("var1")
          .setCheck(["Number", "String"]);
      this.appendValueInput("var2")
          .setCheck(["Number", "String"])
          .appendField(new Blockly.FieldDropdown([["+","+"], ["-","-"], ["*","*"], ["/","/"]]), "calc");
      this.setInputsInline(true);
      this.setOutput(true, ["Number", "String"]);
      this.setColour(230);
   this.setTooltip("+ 加算，- 減算，* 乗算，/ 除算");
   this.setHelpUrl("");
    }
  };
