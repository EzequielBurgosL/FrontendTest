'use strict';

describe('logic (username)', function () {

    it('should search Github user info', done => {
        logic.retrieveUser('EzequielBurgosL')
            .then((user, error) => {

                expect(error).toBeUndefined();

                expect(user).toBeDefined();
                expect(user.html_url).toBe('https://github.com/EzequielBurgosL')
                expect(user.login).toBe('EzequielBurgosL');
                expect(user.id).toBe(36644436);
                expect(user.bio).toBe(null);

                done();

            })
    });

    it('should throw error incorrect type of input', done => {
        logic.retrieveUser('')
            .catch(({message}) => {
                expect(message).toBe('username is empty')
                done()
            })
    });

    it('should throw error incorrect type of input', done => {
        logic.retrieveUser(2018)
            .catch(({ message }) => {
                expect(message).toBe('username is not a string')
                done()
            })
    });

    it('should throw error incorrect type of input', done => {
        logic.retrieveUser(true)
            .catch(({ message }) => {
                expect(message).toBe('username is not a string')
                done()
            })
    });

    it('should throw error incorrect type of input', done => {
        logic.retrieveUser(['EzequielBurgosL', 'manuelbarzi'])
            .catch(({ message }) => {
                expect(message).toBe('username is not a string')
                done()
            })
    });

    it('should throw error incorrect type of input', done => {
        logic.retrieveUser({username: 'EzequielBurgosL', username: 'manuelbarzi'})
            .catch(({ message }) => {
                expect(message).toBe('username is not a string')
                done()
            })
    });

    it('should throw error incorrect type of input', done => {
        logic.retrieveUser(undefined)
            .catch(({ message }) => {
                expect(message).toBe('username is not a string')
                done()
            })
    });

    it('should throw error incorrect type of input', done => {
        logic.retrieveUser(null)
            .catch(({ message }) => {
                expect(message).toBe('username is not a string')
                done()
            })
    });

    it('should search Github repositories from an user', done => {
        logic.retrieveRepos('EzequielBurgosL')
            .then((repos, error) => {
                
                expect(error).toBeUndefined();
                
                expect(repos).toBeDefined();
                expect(repos[0].id).toBe(138303814)
                expect(repos[0].name).toBe('singing-lab');
                expect(repos[0].full_name).toBe('EzequielBurgosL/singing-lab');
                expect(repos.length).toBeDefined();

                done();

            })
    });

    it('should throw error incorrect type of input', done => {
        logic.retrieveRepos('')
            .catch(({message}) => {
                expect(message).toBe('username is empty')
                done()
            })
    });

    it('should throw error incorrect type of input', done => {
        logic.retrieveRepos(2018)
            .catch(({ message }) => {
                expect(message).toBe('username is not a string')
                done()
            })
    });

    it('should throw error incorrect type of input', done => {
        logic.retrieveRepos(true)
            .catch(({ message }) => {
                expect(message).toBe('username is not a string')
                done()
            })
    });

    it('should throw error incorrect type of input', done => {
        logic.retrieveRepos(['EzequielBurgosL', 'manuelbarzi'])
            .catch(({ message }) => {
                expect(message).toBe('username is not a string')
                done()
            })
    });

    it('should throw error incorrect type of input', done => {
        logic.retrieveRepos({username: 'EzequielBurgosL', username: 'manuelbarzi'})
            .catch(({ message }) => {
                expect(message).toBe('username is not a string')
                done()
            })
    });

    it('should throw error incorrect type of input', done => {
        logic.retrieveRepos(undefined)
            .catch(({ message }) => {
                expect(message).toBe('username is not a string')
                done()
            })
    });

    it('should throw error incorrect type of input', done => {
        logic.retrieveRepos(null)
            .catch(({ message }) => {
                expect(message).toBe('username is not a string')
                done()
            })
    });

});