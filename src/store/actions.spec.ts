import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {baseUrl} from '../components/github-api-client/github-api-client';
import store from './';
import { expect } from 'chai';
import './../components/github-api-client';
import '../components/data-mapper';
import {actions, actionTypes} from './';

const mockGithubUserName = 'testUser';
const mockRepoName = 'testRepo';

let state;

describe('actions', () => {
    describe('type: retrieve github repos', () => {
        let mock;
        beforeEach(() => {
            mock = new MockAdapter(axios);

            mock.onGet(`${baseUrl}/users/${mockGithubUserName}/repos?per_page=10`).reply(
                200,
                [
                    {
                    'id': 87546623,
                    'name': 'mntns',
                    'full_name': 'ThomasRutzer/mntns',
                    'fork': false,
                    'created_at': '2017-04-07T13:08:11Z',
                    'updated_at': '2017-11-16T22:00:14Z',
                    'pushed_at': '2018-02-26T11:29:24Z',
                    'git_url': 'git://github.com/ThomasRutzer/mntns.git',
                    'ssh_url': 'git@github.com:ThomasRutzer/mntns.git',
                    'clone_url': 'https://github.com/ThomasRutzer/mntns.git',
                    'svn_url': 'https://github.com/ThomasRutzer/mntns',
                    'homepage': null,
                    'size': 1407,
                    'stargazers_count': 0,
                    'watchers_count': 0,
                    'language': 'TypeScript',
                    'has_issues': true,
                    'has_projects': true,
                    'has_downloads': true,
                    'has_wiki': true,
                    'has_pages': true,
                    'forks_count': 0,
                    'mirror_url': null,
                    'archived': false,
                    'open_issues_count': 0,
                    'license': null,
                    'forks': 0,
                    'open_issues': 0,
                    'watchers': 0,
                    'default_branch': 'master'
                },
                    {
                    'id': 118357197,
                    'name': 'portfolio',
                    'full_name': 'ThomasRutzer/portfolio',
                    'owner': {
                        'login': 'ThomasRutzer',
                        'id': 8199250,
                        'avatar_url': 'https://avatars2.githubusercontent.com/u/8199250?v=4',
                        'gravatar_id': '',
                        'url': 'https://api.github.com/users/ThomasRutzer',
                        'html_url': 'https://github.com/ThomasRutzer',
                        'followers_url': 'https://api.github.com/users/ThomasRutzer/followers',
                        'following_url': 'https://api.github.com/users/ThomasRutzer/following{/other_user}',
                        'gists_url': 'https://api.github.com/users/ThomasRutzer/gists{/gist_id}',
                        'starred_url': 'https://api.github.com/users/ThomasRutzer/starred{/owner}{/repo}',
                        'subscriptions_url': 'https://api.github.com/users/ThomasRutzer/subscriptions',
                        'organizations_url': 'https://api.github.com/users/ThomasRutzer/orgs',
                        'repos_url': 'https://api.github.com/users/ThomasRutzer/repos',
                        'events_url': 'https://api.github.com/users/ThomasRutzer/events{/privacy}',
                        'received_events_url': 'https://api.github.com/users/ThomasRutzer/received_events',
                        'type': 'User',
                        'site_admin': false
                    },
                    'private': false,
                    'html_url': 'https://github.com/ThomasRutzer/portfolio',
                    'description': null,
                    'fork': false,
                    'url': 'https://api.github.com/repos/ThomasRutzer/portfolio',
                    'forks_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/forks',
                    'keys_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/keys{/key_id}',
                    'collaborators_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/collaborators{/collaborator}',
                    'teams_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/teams',
                    'hooks_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/hooks',
                    'issue_events_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/issues/events{/number}',
                    'events_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/events',
                    'assignees_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/assignees{/user}',
                    'branches_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/branches{/branch}',
                    'tags_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/tags',
                    'blobs_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/git/blobs{/sha}',
                    'git_tags_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/git/tags{/sha}',
                    'git_refs_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/git/refs{/sha}',
                    'trees_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/git/trees{/sha}',
                    'statuses_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/statuses/{sha}',
                    'languages_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/languages',
                    'stargazers_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/stargazers',
                    'contributors_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/contributors',
                    'subscribers_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/subscribers',
                    'subscription_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/subscription',
                    'commits_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/commits{/sha}',
                    'git_commits_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/git/commits{/sha}',
                    'comments_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/comments{/number}',
                    'issue_comment_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/issues/comments{/number}',
                    'contents_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/contents/{+path}',
                    'compare_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/compare/{base}...{head}',
                    'merges_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/merges',
                    'archive_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/{archive_format}{/ref}',
                    'downloads_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/downloads',
                    'issues_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/issues{/number}',
                    'pulls_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/pulls{/number}',
                    'milestones_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/milestones{/number}',
                    'notifications_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/notifications{?since,all,participating}',
                    'labels_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/labels{/name}',
                    'created_at': '2018-01-21T17:28:58Z',
                    'updated_at': '2018-02-14T10:42:58Z',
                    'pushed_at': '2018-02-26T11:34:12Z',
                    'git_url': 'git://github.com/ThomasRutzer/portfolio.git',
                    'ssh_url': 'git@github.com:ThomasRutzer/portfolio.git',
                    'clone_url': 'https://github.com/ThomasRutzer/portfolio.git',
                    'svn_url': 'https://github.com/ThomasRutzer/portfolio',
                    'homepage': null,
                    'size': 549,
                    'stargazers_count': 0,
                    'watchers_count': 0,
                    'language': 'TypeScript',
                    'has_issues': true,
                    'has_projects': true,
                    'has_downloads': true,
                    'has_wiki': true,
                    'has_pages': false,
                    'forks_count': 0,
                    'mirror_url': null,
                    'archived': false,
                    'open_issues_count': 0,
                    'license': null,
                    'forks': 0,
                    'open_issues': 0,
                    'watchers': 0,
                    'default_branch': 'master'
                }
                ]
            );

            state = {
                gitHubData: {
                    repos: {
                        mapped: null,
                        raw: null,
                    },
                    commits: {}
                }
            };
        });

        it('returns promise', async () => {
            return expect(actions[actionTypes.RETRIEVE_GITHUB_REPOS]({commit: store.commit, state: state}, { userName: mockGithubUserName, perPage: 10 })).to.eventually.be.fulfilled;
        });

        it('returns promise when called twice', async () => {
            await expect(actions[actionTypes.RETRIEVE_GITHUB_REPOS]({commit: store.commit, state: state}, { userName: mockGithubUserName, perPage: 10 }));
            return expect(actions[actionTypes.RETRIEVE_GITHUB_REPOS]({commit: store.commit, state: state}, { userName: mockGithubUserName, perPage: 10 })).to.eventually.be.fulfilled;
        });

        it('adds repos to store.state', async () => {
           await actions[actionTypes.RETRIEVE_GITHUB_REPOS]({commit: store.commit, state: state}, { userName: mockGithubUserName, perPage: 10 });
           expect(store.state.gitHubData.repos.mapped.length).to.equal(2);
       });
    });

    describe('type: retrieve github commits', () => {
        let mock;
        beforeEach(() => {
            mock = new MockAdapter(axios);

            mock.onGet(`${baseUrl}/repos/${mockGithubUserName}/${mockRepoName}/commits`).reply(
                200,
                [
                    {
                        'sha': '875670a38c40556f3c115dbeef1c4fd88cb240f2',
                        'commit': {
                            'author': {
                                'name': 'Thomas Rutzer',
                                'email': 'thomas.rutzer@diepartments.de',
                                'date': '2018-03-01T14:24:53Z'
                            },
                            'committer': {
                                'name': 'Thomas Rutzer',
                                'email': 'thomas.rutzer@diepartments.de',
                                'date': '2018-03-01T14:24:53Z'
                            },
                            'message': 'changed state.background to its own object',
                            'tree': {
                                'sha': '15513bdd7f919148dad2e6e8642756b22ff77928',
                                'url': 'https://api.github.com/repos/ThomasRutzer/portfolio/git/trees/15513bdd7f919148dad2e6e8642756b22ff77928'
                            },
                            'url': 'https://api.github.com/repos/ThomasRutzer/portfolio/git/commits/875670a38c40556f3c115dbeef1c4fd88cb240f2',
                            'comment_count': 0,
                            'verification': {
                                'verified': false,
                                'reason': 'unsigned',
                                'signature': null,
                                'payload': null
                            }
                        },
                        'url': 'https://api.github.com/repos/ThomasRutzer/portfolio/commits/875670a38c40556f3c115dbeef1c4fd88cb240f2',
                        'html_url': 'https://github.com/ThomasRutzer/portfolio/commit/875670a38c40556f3c115dbeef1c4fd88cb240f2',
                        'comments_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/commits/875670a38c40556f3c115dbeef1c4fd88cb240f2/comments',
                        'author': {
                            'login': 'dp-thomas',
                            'id': 26769134,
                            'avatar_url': 'https://avatars2.githubusercontent.com/u/26769134?v=4',
                            'gravatar_id': '',
                            'url': 'https://api.github.com/users/dp-thomas',
                            'html_url': 'https://github.com/dp-thomas',
                            'followers_url': 'https://api.github.com/users/dp-thomas/followers',
                            'following_url': 'https://api.github.com/users/dp-thomas/following{/other_user}',
                            'gists_url': 'https://api.github.com/users/dp-thomas/gists{/gist_id}',
                            'starred_url': 'https://api.github.com/users/dp-thomas/starred{/owner}{/repo}',
                            'subscriptions_url': 'https://api.github.com/users/dp-thomas/subscriptions',
                            'organizations_url': 'https://api.github.com/users/dp-thomas/orgs',
                            'repos_url': 'https://api.github.com/users/dp-thomas/repos',
                            'events_url': 'https://api.github.com/users/dp-thomas/events{/privacy}',
                            'received_events_url': 'https://api.github.com/users/dp-thomas/received_events',
                            'type': 'User',
                            'site_admin': false
                        },
                        'committer': {
                            'login': 'dp-thomas',
                            'id': 26769134,
                            'avatar_url': 'https://avatars2.githubusercontent.com/u/26769134?v=4',
                            'gravatar_id': '','url': 'https://api.github.com/users/dp-thomas',
                            'html_url': 'https://github.com/dp-thomas',
                            'followers_url': 'https://api.github.com/users/dp-thomas/followers',
                            'following_url': 'https://api.github.com/users/dp-thomas/following{/other_user}',
                            'gists_url': 'https://api.github.com/users/dp-thomas/gists{/gist_id}',
                            'starred_url': 'https://api.github.com/users/dp-thomas/starred{/owner}{/repo}',
                            'subscriptions_url': 'https://api.github.com/users/dp-thomas/subscriptions',
                            'organizations_url': 'https://api.github.com/users/dp-thomas/orgs',
                            'repos_url': 'https://api.github.com/users/dp-thomas/repos',
                            'events_url': 'https://api.github.com/users/dp-thomas/events{/privacy}',
                            'received_events_url': 'https://api.github.com/users/dp-thomas/received_events',
                            'type': 'User',
                            'site_admin': false
                        },
                        'parents': [
                            {
                                'sha': '6863a61dfbfd5d7afbf7d3ce5c23c41c5edb0295',
                                'url': 'https://api.github.com/repos/ThomasRutzer/portfolio/commits/6863a61dfbfd5d7afbf7d3ce5c23c41c5edb0295',
                                'html_url': 'https://github.com/ThomasRutzer/portfolio/commit/6863a61dfbfd5d7afbf7d3ce5c23c41c5edb0295'
                            }
                        ]
                    },
                    {
                        'sha': 'ae673a41d606dfb7c9db7b63b0c43860f21e3959',
                        'commit': {
                            'author': {
                                'name': 'Thomas Rutzer',
                                'email': 'thomas.rutzer@diepartments.de',
                                'date': '2018-02-17T20:46:11Z'
                            },
                            'committer': {
                                'name': 'Thomas Rutzer',
                                'email': 'thomas.rutzer@diepartments.de',
                                'date': '2018-02-17T20:46:11Z'
                            },
                            'message': 'various ui items',
                            'tree': {
                                'sha': '8f4db500344133556732dfa70978cdbaed4039d0',
                                'url': 'https://api.github.com/repos/ThomasRutzer/portfolio/git/trees/8f4db500344133556732dfa70978cdbaed4039d0'
                            },
                            'url': 'https://api.github.com/repos/ThomasRutzer/portfolio/git/commits/ae673a41d606dfb7c9db7b63b0c43860f21e3959',
                            'comment_count': 0,
                            'verification': {
                                'verified': false,
                                'reason': 'unsigned',
                                'signature': null,
                                'payload': null
                            }
                        },
                        'url': 'https://api.github.com/repos/ThomasRutzer/portfolio/commits/ae673a41d606dfb7c9db7b63b0c43860f21e3959',
                        'html_url': 'https://github.com/ThomasRutzer/portfolio/commit/ae673a41d606dfb7c9db7b63b0c43860f21e3959',
                        'comments_url': 'https://api.github.com/repos/ThomasRutzer/portfolio/commits/ae673a41d606dfb7c9db7b63b0c43860f21e3959/comments',
                        'author': {
                            'login': 'dp-thomas',
                            'id': 26769134,
                            'avatar_url': 'https://avatars2.githubusercontent.com/u/26769134?v=4',
                            'gravatar_id': '',
                            'url': 'https://api.github.com/users/dp-thomas',
                            'html_url': 'https://github.com/dp-thomas',
                            'followers_url': 'https://api.github.com/users/dp-thomas/followers',
                            'following_url': 'https://api.github.com/users/dp-thomas/following{/other_user}',
                            'gists_url': 'https://api.github.com/users/dp-thomas/gists{/gist_id}',
                            'starred_url': 'https://api.github.com/users/dp-thomas/starred{/owner}{/repo}',
                            'subscriptions_url': 'https://api.github.com/users/dp-thomas/subscriptions',
                            'organizations_url': 'https://api.github.com/users/dp-thomas/orgs',
                            'repos_url': 'https://api.github.com/users/dp-thomas/repos',
                            'events_url': 'https://api.github.com/users/dp-thomas/events{/privacy}',
                            'received_events_url': 'https://api.github.com/users/dp-thomas/received_events',
                            'type': 'User',
                            'site_admin': false
                        },
                        'committer': {
                            'login': 'dp-thomas',
                            'id': 26769134,
                            'avatar_url': 'https://avatars2.githubusercontent.com/u/26769134?v=4',
                            'gravatar_id': '',
                            'url': 'https://api.github.com/users/dp-thomas',
                            'html_url': 'https://github.com/dp-thomas',
                            'followers_url': 'https://api.github.com/users/dp-thomas/followers',
                            'following_url': 'https://api.github.com/users/dp-thomas/following{/other_user}',
                            'gists_url': 'https://api.github.com/users/dp-thomas/gists{/gist_id}',
                            'starred_url': 'https://api.github.com/users/dp-thomas/starred{/owner}{/repo}',
                            'subscriptions_url': 'https://api.github.com/users/dp-thomas/subscriptions',
                            'organizations_url': 'https://api.github.com/users/dp-thomas/orgs',
                            'repos_url': 'https://api.github.com/users/dp-thomas/repos',
                            'events_url': 'https://api.github.com/users/dp-thomas/events{/privacy}',
                            'received_events_url': 'https://api.github.com/users/dp-thomas/received_events',
                            'type': 'User',
                            'site_admin': false
                        },
                        'parents': [
                            {
                                'sha': '0e1aa03cd633758b8f91837f3f459bd680466169',
                                'url': 'https://api.github.com/repos/ThomasRutzer/portfolio/commits/0e1aa03cd633758b8f91837f3f459bd680466169',
                                'html_url': 'https://github.com/ThomasRutzer/portfolio/commit/0e1aa03cd633758b8f91837f3f459bd680466169'
                            }
                        ]
                    }
                ]
            );
        });

        it('returns promise', async () => {
            return expect(actions[actionTypes.RETRIEVE_GITHUB_COMMITS_FOR_REPO](
                {commit: store.commit, state: state},
                { repoName: mockRepoName, userName: mockGithubUserName, perPage: 0 } ))
                .to.eventually.be.fulfilled;
        });

        it('returns promise when called twice', async () => {
            await expect(actions[actionTypes.RETRIEVE_GITHUB_COMMITS_FOR_REPO]({commit: store.commit, state: state}, { repoName: mockRepoName, userName: mockGithubUserName, perPage: 10 }));
            return expect(actions[actionTypes.RETRIEVE_GITHUB_COMMITS_FOR_REPO]({commit: store.commit, state: state}, { repoName: mockRepoName, userName: mockGithubUserName, perPage: 10 })).to.eventually.be.fulfilled;
        });

        it('adds commit to store', async () => {
            await actions[actionTypes.RETRIEVE_GITHUB_COMMITS_FOR_REPO]({commit: store.commit, state: state}, { repoName: mockRepoName, userName: mockGithubUserName, perPage: 10 } );
            expect(store.state.gitHubData.commits[mockRepoName].mapped).to.exist;
            expect(store.state.gitHubData.commits[mockRepoName].raw).to.exist;
        });
    });
});
