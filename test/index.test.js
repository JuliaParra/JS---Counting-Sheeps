import { describe, it, expect } from 'vitest';
import { countSheeps } from '../index.js';

describe('countSheeps', () => {
    it('should return the correct number of sheep for a mixed list', () => {
        const list = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true];
        const result = countSheeps(list);
        expect(result).toBe('There are 17 sheep in total');
    });

    it('should return the correct message for a list with no sheep', () => {
        const list = [false, false, false];
        const result = countSheeps(list);
        expect(result).toBe('the wolf ate the sheep');
    });


});
