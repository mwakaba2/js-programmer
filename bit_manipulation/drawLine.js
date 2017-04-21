/*jshint esversion: 6 */
function drawLine(screen, width, x1, x2, y) {
  let start_offset = x1 % 8;
  let first_byte = Math.floor(x1 / 8);
  if(start_offset !== 0) {
    first_byte ++;
  }
  let end_offset = x2 % 8;
  let last_byte = Math.floor(x2 / 8);
  if(end_offset !== 7) {
    last_byte --;
  }
  for(let i = first_byte; i <= last_byte; i++) {
    screen[(width / 8) * y + i] = 0xFF;
  }
  let start_mask = 0xFF >> start_offset;
  let end_mask = ~(0xFF >> (end_offset + 1));

  if( (Math.floor(x1/8)) == (Math.floor(x2/8)) ) {
    let byte_number = (width / 8) * y + (Math.floor(x1/8));
    screen[byte_number] |= start_mask & end_mask;
  } else {
    if(start_offset !== 0){
      let byte_number = (width / 8) * y + first_byte - 1;
      screen[byte_number] |= start_mask;
    }
    if(end_offset !== 7){
      let byte_number = (width / 8) * y + last_byte + 1;
      screen[byte_number] |= end_mask;
    }
  }
  return screen;
}

module.exports = {
  drawLine
};