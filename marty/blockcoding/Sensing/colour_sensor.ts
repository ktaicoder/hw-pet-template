javascriptGenerator['marty_colour_sensor'] = function (block) {
  const code = `await makerKit.hw.run(routineContext, "marty.colour_sensor")`
  return [code, ORDER.AWAIT]
}
