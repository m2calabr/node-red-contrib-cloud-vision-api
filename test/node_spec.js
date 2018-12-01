var should = require('should');
var helper = require('node-red-node-test-helper');
var node = require('../node.js');

helper.init(require.resolve('node-red'));

describe('cloud-vision-api node', function () {

    before(function (done) {
        helper.startServer(done);
    });

    after(function (done) {
        helper.stopServer(done);
    });

    afterEach(function () {
        helper.unload();
    });

    it('should be loaded', function (done) {
        var flow = [{ id: 'n1', type: 'cloud-vision-api', name: 'cloud-vision-api' }];
        helper.load(node, flow, function () {
            var n1 = helper.getNode('n1');
            n1.should.have.property('name', 'cloud-vision-api');
            done();
        });
    });

    it('should handle annotate()', function (done) {
        var flow = [
            { id: 'n1', type: 'cloud-vision-api', name: 'cloud-vision-api',
                method: 'annotate',
                annotate_body: '<node property>', // (1) define node properties
                annotate_type: '<node property>', // (1) define node properties
                annotate_key: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
});
