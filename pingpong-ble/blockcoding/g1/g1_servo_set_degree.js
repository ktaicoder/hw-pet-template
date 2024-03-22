javascriptGenerator.forBlock['oz71_g1_servo_set_degree'] = function (block) {
  const number_distance = block.getFieldValue('DISTANCE')
  const code = `await makerKit.hw.run(routineContext, "pingpong.setServoDegree", ${7}, ${number_distance})`
  return code
}