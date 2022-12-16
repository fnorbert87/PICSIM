let PICini = `
# Version 2.40
# Generated 17/11/2021 GMT

# Copyright © 2021, Microchip Technology Inc. and its subsidiaries ("Microchip")
# All rights reserved.
# 
# This software is developed by Microchip Technology Inc. and its subsidiaries ("Microchip").
# 
# Redistribution and use in source and binary forms, with or without modification, are
# permitted provided that the following conditions are met:
# 
#     1. Redistributions of source code must retain the above copyright notice, this list of
#        conditions and the following disclaimer.
# 
#     2. Redistributions in binary form must reproduce the above copyright notice, this list
#        of conditions and the following disclaimer in the documentation and/or other
#        materials provided with the distribution. Publication is not required when
#        this file is used in an embedded application.
# 
#     3. Microchip's name may not be used to endorse or promote products derived from this
#        software without specific prior written permission.
# 
# THIS SOFTWARE IS PROVIDED BY MICROCHIP "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
# INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
# PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL MICROCHIP BE LIABLE FOR ANY DIRECT, INDIRECT,
# INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING BUT NOT LIMITED TO
# PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA OR PROFITS; OR BUSINESS
# INTERRUPTION) HOWSOEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
# LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
# THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

#	PICC.INI
#	This file defines the memory sizes and organization
#	of a PIC10/12/16 device
#
#	All values are in hexadecimal unless otherwise stated.
#
#	Fields used are:
#
#	ARCH=<processor_architecture>
#			PIC12, PIC14 or PIC16, corresponding to baseline,
#			midrange and high end respectively
#	PROCID=<id>
#			Microchip processor identifier. This corresponds
#			to the processor field in Microchip COFF output.
#	ROMSIZE=<size_of_rom>
#			Size of program memory (words) in hex
#	BANKS=<num_banks>
#			Number of data memory banks used (for the
#			midrange, this will always be at least 2)
#	RAMBANK=<range_start>,<range_end>
#			This field may appear multiple times and
#			specifies a RAM bank memory range. e.g. A0,BF
#	COMMON=<range_start>,<range_end>
#			Specifies an area of RAM that is mirrored in all
#			banks, i.e. is accessible regardless of RPn settings.
#	ICD1RAM=<range_start>,<range_end>
#			Specifies an area of RAM that is used by
#			MPLAB-ICD
#	ICD2RAM=<range_start>,<range_end>
#			Specifies an area of RAM that is used by
#			MPLAB-ICD2
#	ICD3RAM=<range_start>,<range_end>
#			Specifies an area of RAM that is used by
#			MPLAB-ICD3 and REAL-ICE
#	ICD1ROM=<range_start>,<range_end>
#			Specifies an area of ROM that is used by
#			MPLAB-ICD
#	ICD2ROM=<range_start>,<range_end>
#			Specifies an area of ROM that is used by
#			MPLAB-ICD2
#	ICD3ROM=<range_start>,<range_end>
#			Specifies an area of ROM that is used by
#			MPLAB-ICD3 and REAL-ICE
#	DATABANK=<bank>
#			Identifies which bank the EEDATA/PMDATA register is found.
#			Used for library selection.
#
#	FLASHTYPE=<string>
#			Indicates if and how this midrange processor is capable of reading
#			and how a device can write to its own program memory.
#			READ - Read only
#			READWRITE_1 - Writes one word at a time, erasure is automatic
#			READWRITE_A - Writes done in blocks of words, block erasure automatic
#			READWRITE_B - Writes done in blocks, erasure is separate step
#
#	FLASH_READ=<size>
#			The number of words read in a flash-read operation. Default is zero.
#
#	FLASH_WRITE=<size>
#			The number of words in flash writing block. Default is zero.
#
#	FLASH_ERASE=<size>
#			The number of words in a flash-erase block. Default is FLASH_WRITE size.
#
#	EEPROM=<range_start-range_end>
#			Identifies the range (bytes) of EEPROM available to this device
#
#	FLASHDATA=<range_start-range_end>
#			Defines the range of flash memory used to access EEPROM data
#
#	OSCCAL=<address>
#			The address where the OSCCAL sfr is located.
#
#	OSCCON=<address>
#			The address where the OSCCON sfr is located.
#
#	OSCHOW=<string>
#			How does the device calibrate its oscillator?
#			RETLW - The device's oscillator calibration constant is stored at the top
#			of program memory in a RETLW instruction, the compiler can assign this
#			to the OSCCAL sfr which is located at OSCCAL.
#			CALWORD - The device stores the oscillator constant in a calibration
#			word located in flash program memory.  The word is read from program
#			memory and assigned to OSCCAL.  The compiler does not perform this
#			operation.  It must be done by the user's program.
#
#	CONFIG=<range_start-range_end>
#			Define a new address range for the configuration register region if
#			the address range differs from the traditional range for its
#			architecture type.
#
#	IDLOC=<range_start-range_end>
#			Define a new address range for the user ID location region if
#			the address range differs from the traditional range for its
#			architecture type.
#
#	STACKDEPTH=<limit>
#			This is used set the maximum stack level depth for a processor. If not specified,
#			the default setting will be 2 for baseline PICs, 8 for midrange PICs and 16 for
#			high-end PICs and enhanced mid-range PICs.
#
#	VOLSFRS=<range_start>-<range_end>,...
#			Instructions generated by the compiler that access SFRs in the given memory
#			ranges will won't be optimized by the assembly optimizer
#
#	BANKSIZE=<size>
#			Maximum number of bytes in a RAM bank.
#
#	PAGESIZE=<size>
#			Maximum number of words in a program memory page.
#
#	LINEARBASE=<addr>
#			Base address of the virtual linear data memory, exclusive to enhanced mid-range devices.
#
#   PCBITS=<number of bits>
#           How many implemented bits are there in the PC?
#
#   EEADRBITS=<number of bits>
#           How many bits are available to address data EEPROM, if any.
#
#   BANKSELBITS=<number of bits>
#           Number of bits available for bank-selection.
#
#   EEPROMINT=<EEREG_INT|NVMREG_INT>
#   		Which register interface is used to access the device's EEPROM, if any.
#
#	SFR=<name>,<address>,<bit-width>
#			Describes a SFR of the device.  The address is in hexadecimal, and the bit-width decimal.
#			SFRs are sorted in order of address, and then by bit-width in descending order.  If an SFR duplicates
#			an address, then that SFR is an alias of the first with that address.  An SFR that has a bit-width
#			greater than the next, but the next also shares the same address, then that SFR is a joined SFR
#			of those that follow, but limited by its bit-width.
#
#	SFRFLD=<name>,<address>,<bit-position>,<bit-width>
#			Describes a SFR bit-field of the device.  The address is in hexadecimal, and the bit-width and
#			bit-position are decimal. SFRFLDs are sorted in order of address.
#
#	CONFIGPROG=<num_regs>,<delta>,<alignment>
#	IDLOCPROG=<num_regs>,<delta>,<alignment>
#			These describe the programming characteristics of configuration and user id memory.
#			Where,
#			<num_regs> = the number of registers (equivalent to a CWORD in CFGDATA files) per programming unit.
#			<delta> = the address delta between contiguous registers, i.e. the addresses of a CWORD.
#			<alignment> = the address alignment of programming units, where the address is that of the first CWORD
#							in the programming unit.
#

[16F628]
ARCH=PIC14
BANKS=4
BANKSELBITS=0x2
BANKSIZE=0x80
COMMON=70-7F,F0-FF,170-17F,1F0-1FF
CONFIG=2007-2007
CONFIGPROG=1,1,1
DATABANK=1
EEADRBITS=0x8
EEPROM=2100-217F
EEPROMINT=EEREG_INT
FLASHTYPE=READWRITE_B
FLASH_ERASE=1
FLASH_READ=1
FLASH_WRITE=1
IDLOC=2000-2003
IDLOCPROG=1,1,1
MAKE=MICROCHIPT1OSCEN
PAGESIZE=0x800
PCBITS=0xD
PROCID=6628
RAMBANK=20-7F,A0-EF,120-14F
ROMSIZE=800
SFR=INDF,0,8
SFR=TMR0,1,8
SFR=PCL,2,8
SFR=STATUS,3,8
SFR=FSR,4,8
SFR=PORTA,5,8
SFR=PORTB,6,8
SFR=PCLATH,A,8
SFR=INTCON,B,8
SFR=PIR1,C,8
SFR=TMR1,E,16
SFR=TMR1L,E,8
SFR=TMR1H,F,8
SFR=T1CON,10,8
SFR=TMR2,11,8
SFR=T2CON,12,8
SFR=CCPR1,15,16
SFR=CCPR1L,15,8
SFR=CCPR1H,16,8
SFR=CCP1CON,17,8
SFR=RCSTA,18,8T1OSCEN
SFR=TXREG,19,8
SFR=RCREG,1A,8
SFR=CMCON,1F,8
SFR=OPTION_REG,81,8
SFR=TRISA,85,8
SFR=TRISB,86,8
SFR=PIE1,8C,8
SFR=PCON,8E,8
SFR=PR2,92,8
SFR=TXSTA,98,8
SFR=SPBRG,99,8
SFR=EEDATA,9A,8
SFR=EEADR,9B,8
SFR=EECON1,9C,8
SFR=EECON2,9D,8
SFR=VRCON,9F,8
SFRFLD=C,3,0,1
SFRFLD=DC,3,1,1
SFRFLD=Z,3,2,1
SFRFLD=nPD,3,3,1
SFRFLD=nTO,3,4,1
SFRFLD=RP,3,5,2
SFRFLD=IRP,3,7,1
SFRFLD=RP0,3,5,1
SFRFLD=RP1,3,6,1
SFRFLD=CARRY,3,0,1
SFRFLD=ZERO,3,2,1
SFRFLD=RA0,5,0,1
SFRFLD=RA1,5,1,1
SFRFLD=RA2,5,2,1
SFRFLD=RA3,5,3,1
SFRFLD=RA4,5,4,1
SFRFLD=RA5,5,5,1
SFRFLD=RA6,5,6,1
SFRFLD=RA7,5,7,1
SFRFLD=RB0,6,0,1
SFRFLD=RB1,6,1,1
SFRFLD=RB2,6,2,1
SFRFLD=RB3,6,3,1
SFRFLD=RB4,6,4,1
SFRFLD=RB5,6,5,1
SFRFLD=RB6,6,6,1
SFRFLD=RB7,6,7,1
SFRFLD=PCLATH,A,0,5
SFRFLD=RBIF,B,0,1
SFRFLD=INTF,B,1,1
SFRFLD=T0IF,B,2,1
SFRFLD=RBIE,B,3,1
SFRFLD=INTE,B,4,1
SFRFLD=T0IE,B,5,1
SFRFLD=PEIE,B,6,1
SFRFLD=GIE,B,7,1
SFRFLD=TMR0IF,B,2,1
SFRFLD=TMR0IE,B,5,1
SFRFLD=TMR1IF,C,0,1
SFRFLD=TMR2IF,C,1,1
SFRFLD=CCP1IF,C,2,1
SFRFLD=TXIF,C,4,1
SFRFLD=RCIF,C,5,1
SFRFLD=CMIF,C,6,1
SFRFLD=EEIF,C,7,1
SFRFLD=TMR1,E,0,16
SFRFLD=TMR1ON,10,0,1
SFRFLD=TMR1CS,10,1,1
SFRFLD=nT1SYNC,10,2,1
SFRFLD=T1OSCEN,10,3,1
SFRFLD=T1CKPS,10,4,2
SFRFLD=T1CKPS0,10,4,1
SFRFLD=T1CKPS1,10,5,1
SFRFLD=T2CKPS,12,0,2
SFRFLD=TMR2ON,12,2,1
SFRFLD=TOUTPS,12,3,4
SFRFLD=T2CKPS0,12,0,1
SFRFLD=T2CKPS1,12,1,1
SFRFLD=TOUTPS0,12,3,1
SFRFLD=TOUTPS1,12,4,1
SFRFLD=TOUTPS2,12,5,1
SFRFLD=TOUTPS3,12,6,1
SFRFLD=CCPR1,15,0,16
SFRFLD=CCP1M,17,0,4
SFRFLD=CCP1Y,17,4,1
SFRFLD=CCP1X,17,5,1
SFRFLD=CCP1M0,17,0,1
SFRFLD=CCP1M1,17,1,1
SFRFLD=CCP1M2,17,2,1
SFRFLD=CCP1M3,17,3,1
SFRFLD=RX9D,18,0,1
SFRFLD=OERR,18,1,1
SFRFLD=FERR,18,2,1
SFRFLD=ADEN,18,3,1
SFRFLD=CREN,18,4,1
SFRFLD=SREN,18,5,1
SFRFLD=RX9,18,6,1
SFRFLD=SPEN,18,7,1
SFRFLD=ADDEN,18,3,1
SFRFLD=CM,1F,0,3
SFRFLD=CIS,1F,3,1
SFRFLD=C1INV,1F,4,1
SFRFLD=C2INV,1F,5,1
SFRFLD=C1OUT,1F,6,1
SFRFLD=C2OUT,1F,7,1
SFRFLD=CM0,1F,0,1
SFRFLD=CM1,1F,1,1
SFRFLD=CM2,1F,2,1
SFRFLD=PS,81,0,3
SFRFLD=PSA,81,3,1
SFRFLD=T0SE,81,4,1
SFRFLD=T0CS,81,5,1
SFRFLD=INTEDG,81,6,1
SFRFLD=nRBPU,81,7,1
SFRFLD=PS0,81,0,1
SFRFLD=PS1,81,1,1
SFRFLD=PS2,81,2,1
SFRFLD=TRISA0,85,0,1
SFRFLD=TRISA1,85,1,1
SFRFLD=TRISA2,85,2,1
SFRFLD=TRISA3,85,3,1
SFRFLD=TRISA4,85,4,1
SFRFLD=TRISA5,85,5,1
SFRFLD=TRISA6,85,6,1
SFRFLD=TRISA7,85,7,1
SFRFLD=TRISB0,86,0,1
SFRFLD=TRISB1,86,1,1
SFRFLD=TRISB2,86,2,1
SFRFLD=TRISB3,86,3,1
SFRFLD=TRISB4,86,4,1
SFRFLD=TRISB5,86,5,1
SFRFLD=TRISB6,86,6,1
SFRFLD=TRISB7,86,7,1
SFRFLD=TMR1IE,8C,0,1
SFRFLD=TMR2IE,8C,1,1
SFRFLD=CCP1IE,8C,2,1
SFRFLD=TXIE,8C,4,1
SFRFLD=RCIE,8C,5,1
SFRFLD=CMIE,8C,6,1
SFRFLD=EEIE,8C,7,1
SFRFLD=nBOR,8E,0,1
SFRFLD=nPOR,8E,1,1
SFRFLD=OSCF,8E,3,1
SFRFLD=nBO,8E,0,1
SFRFLD=nBOD,8E,0,1
SFRFLD=TX9D,98,0,1
SFRFLD=TRMT,98,1,1
SFRFLD=BRGH,98,2,1
SFRFLD=SYNC,98,4,1
SFRFLD=TXEN,98,5,1
SFRFLD=TX9,98,6,1
SFRFLD=CSRC,98,7,1
SFRFLD=RD,9C,0,1
SFRFLD=WR,9C,1,1
SFRFLD=WREN,9C,2,1
SFRFLD=WRERR,9C,3,1
SFRFLD=VR,9F,0,4
SFRFLD=VRR,9F,5,1
SFRFLD=VROE,9F,6,1
SFRFLD=VREN,9F,7,1
SFRFLD=VR0,9F,0,1
SFRFLD=VR1,9F,1,1
SFRFLD=VR2,9F,2,1
SFRFLD=VR3,9F,3,1
STACKDEPTH=8
VOLSFRS=9C-9D`;
