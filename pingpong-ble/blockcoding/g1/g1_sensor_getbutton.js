javascriptGenerator.forBlock['oz71_g1_sensor_getbutton'] = function (block, generator) {
  const code = `await makerKit.hw.run(routineContext, 'pingpong.getButtonSensor');\n`
  return [code, Order.NONE]
}
