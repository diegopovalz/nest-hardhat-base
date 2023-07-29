import { Injectable } from '@nestjs/common';
import { ethers } from 'hardhat';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
