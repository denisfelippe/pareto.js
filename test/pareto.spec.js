import expect from 'expect'
import _ from '../src/pareto'

describe('Pareto', () => {
    describe('init', () => {
        const methods = Object.keys(_)

        expect(methods.length).toBe(13)
        expect(methods).toContain('head')
        expect(methods).toContain('tail')
        expect(methods).toContain('last')
        expect(methods).toContain('flatten')
        expect(methods).toContain('where')
        expect(methods).toContain('take')
        expect(methods).toContain('remove')
        expect(methods).toContain('removeAll')
        expect(methods).toContain('indexOf')
        expect(methods).toContain('curry')
        expect(methods).toContain('compose')
        expect(methods).toContain('equals')
        expect(methods).toContain('matches')
    })
})
