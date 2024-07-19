import { Controller, Get } from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('employees')
export class EmployeesController {
    @Public()
    @Get()
    listEmployees() {
        return {
            email: 'I am josef'
        }
    }
}
