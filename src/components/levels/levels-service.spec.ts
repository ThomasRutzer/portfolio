import {expect} from 'chai';
import Vuex from 'vuex';

import * as GeneratorModule from 'mntns-landscape/src/components/generator';
import LevelsService from './levels-service';
import { actions, actionTypes, mutations, mutationTypes } from './../../store';

import rawRepos from './../../../mocks/github-repo-mock';
import rawCommits from './../../../mocks/github-commit-mock';

const mappedRepos = [
    {
        id: 1,
    },
    {
        id: 2
    }
];

const mappedCommits = [];

describe('Levels Service', () => {
    let service, store;

    before(() => {

        store = new Vuex.Store({
            state: {
              levels: {
                  currentLevel: 1,
                  allLevels:  [
                      {
                          index: 1,
                          title: 'repositories'
                      },
                      {
                          index: 2,
                          title: 'commits'
                      }
                  ]
              },
                gitHubData: {
                    startedLoading: null,
                    finishedLoading: null,
                    loadingError: null,

                    startedMapping: null,
                    finishedMapping: null,
                    focusedData: {
                        raw: null,
                        mapped: null,
                        event: null
                    },
                    usedData: {
                        raw: null,
                        mapped: null
                    },

                    repos: {
                        mapped: null,
                        raw: null,
                    },

                    commits: {}
                },
            },
            actions,
            mutations
        });

        service = new LevelsService(store, []);
    });
});