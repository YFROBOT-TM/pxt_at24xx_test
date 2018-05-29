/**
 * makecode AT24CXX EEPROM Package.
 * From microbit/micropython 中文社区.
 * http://www.micropython.org.cn
 */

/**
 * AT24CXX block
 */
//% weight=100 color=#313233 icon="\uf2db" block="AT24CXX"
namespace AT24CXX {
    let AT24_I2C_ADDR = 80;

    /**
     * 写入一个字节到指定地址
     * @param addr eeprom address, eg: 1
     * @param dat is the data will be write, eg: 2
     */
    //% blockId="AT24_WriteByte" block="eeprom 地址 %addr|写字节 %dat"
    //% weight=100 blockGap=8
    export function write_byte(addr: number, dat: number): void {
        let buf = pins.createBuffer(3);
        buf[0] = addr >> 8;
        buf[1] = addr;
        buf[2] = dat;
        pins.i2cWriteBuffer(AT24_I2C_ADDR, buf)
    }

    /**
     * 从指定地址读取字节
     * @param addr eeprom address, eg: 1
     */
    //% blockId="AT24_ReadByte" block="读取字节自地址 %addr"
    //% weight=99 blockGap=8
    export function read_byte(addr: number): number {
        pins.i2cWriteNumber(AT24_I2C_ADDR, addr, NumberFormat.UInt16BE);
        return pins.i2cReadNumber(AT24_I2C_ADDR, NumberFormat.UInt8BE);
    }

    /**
     * 写入字到指定地址
     * @param addr eeprom address, eg: 2
     * @param dat is the data will be write, eg: 3
     */
    //% blockId="AT24_WriteWord" block="eeprom 地址 %addr|写入字 %dat"
    //% weight=90 blockGap=8
    export function write_word(addr: number, dat: number): void {
        let buf = pins.createBuffer(4);
        buf[0] = addr >> 8;
        buf[1] = addr;
        buf[2] = dat >> 8;
        buf[3] = dat;
        pins.i2cWriteBuffer(AT24_I2C_ADDR, buf)
    }

    /**
     * 从指定地址读取字
     * @param addr eeprom address, eg: 2
     */
    //% blockId="AT24_ReadWord" block="读取字从地址 %addr"
    //% weight=89 blockGap=8
    export function read_word(addr: number): number {
        pins.i2cWriteNumber(AT24_I2C_ADDR, addr, NumberFormat.UInt16BE);
        return pins.i2cReadNumber(AT24_I2C_ADDR, NumberFormat.UInt16BE);
    }

    /**
     * 写入双字到指定地址
     * @param addr eeprom address, eg: 4
     * @param dat is the data will be write, eg: 4
     */
    //% blockId="AT24_WriteDWord" block="eeprom 地址 %addr|写入双字 %dat"
    //% weight=80 blockGap=8
    export function write_dword(addr: number, dat: number): void {
        let buf = pins.createBuffer(6);
        buf[0] = addr >> 8;
        buf[1] = addr;
        buf[2] = dat >> 24;
        buf[3] = dat >> 16;
        buf[4] = dat >> 8;
        buf[5] = dat;
        pins.i2cWriteBuffer(AT24_I2C_ADDR, buf)
    }

    /**
     * 从指定地址读取双字
     * @param addr eeprom address, eg: 4
     */
    //% blockId="AT24_ReadDWord" block="读取双字从地址 %addr"
    //% weight=79 blockGap=8
    export function read_dword(addr: number): number {
        pins.i2cWriteNumber(AT24_I2C_ADDR, addr, NumberFormat.UInt16BE);
        return pins.i2cReadNumber(AT24_I2C_ADDR, NumberFormat.Int32BE);
    }
}