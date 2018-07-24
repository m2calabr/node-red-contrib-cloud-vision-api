var should = require("should");
var helper = require("node-red-node-test-helper");
var node = require("../node.js");

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
        var flow = [{ id: "n1", type: "cloud-vision-api", name: "cloud-vision-api" }];
        helper.load(node, flow, function () {
            var n1 = helper.getNode("n1");
            n1.should.have.property('name', 'cloud-vision-api');
            done();
        });
    });

    it('should handle visionfilesasyncBatchAnnotate()', function (done) {
        var flow = [
            { id: "n1", type: "cloud-vision-api", name: "cloud-vision-api", wires: [["n2"]],
                method: "visionfilesasyncBatchAnnotate",
                visionfilesasyncBatchAnnotate_body: "<node property>", // (1) define node properties
                visionfilesasyncBatchAnnotate_key: "<node property>", // (1) define node properties
                visionfilesasyncBatchAnnotate_accessToken: "<node property>", // (1) define node properties
                visionfilesasyncBatchAnnotate_uploadProtocol: "<node property>", // (1) define node properties
                visionfilesasyncBatchAnnotate_quotaUser: "<node property>", // (1) define node properties
                visionfilesasyncBatchAnnotate_prettyPrint: "<node property>", // (1) define node properties
                visionfilesasyncBatchAnnotate_uploadType: "<node property>", // (1) define node properties
                visionfilesasyncBatchAnnotate_fields: "<node property>", // (1) define node properties
                visionfilesasyncBatchAnnotate_callback: "<node property>", // (1) define node properties
                visionfilesasyncBatchAnnotate_oauthToken: "<node property>", // (1) define node properties
                visionfilesasyncBatchAnnotate_xgafv: "<node property>", // (1) define node properties
                visionfilesasyncBatchAnnotate_alt: "<node property>", // (1) define node properties
                service: "n3" },
            { id: "n2", type: "cloud-vision-api-service" },
            { id: "n3", type: "helper" }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode("n3");
            var n1 = helper.getNode("n1");
            n3.on("input", function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: "<input message>" }); // (2) define input message
        });
    });
    it('should handle visionimagesannotate()', function (done) {
        var flow = [
            { id: "n1", type: "cloud-vision-api", name: "cloud-vision-api", wires: [["n2"]],
                method: "visionimagesannotate",
                visionimagesannotate_body: "<node property>", // (1) define node properties
                visionimagesannotate_key: "<node property>", // (1) define node properties
                visionimagesannotate_accessToken: "<node property>", // (1) define node properties
                visionimagesannotate_uploadProtocol: "<node property>", // (1) define node properties
                visionimagesannotate_quotaUser: "<node property>", // (1) define node properties
                visionimagesannotate_prettyPrint: "<node property>", // (1) define node properties
                visionimagesannotate_uploadType: "<node property>", // (1) define node properties
                visionimagesannotate_fields: "<node property>", // (1) define node properties
                visionimagesannotate_callback: "<node property>", // (1) define node properties
                visionimagesannotate_oauthToken: "<node property>", // (1) define node properties
                visionimagesannotate_xgafv: "<node property>", // (1) define node properties
                visionimagesannotate_alt: "<node property>", // (1) define node properties
                service: "n3" },
            { id: "n2", type: "cloud-vision-api-service" },
            { id: "n3", type: "helper" }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode("n3");
            var n1 = helper.getNode("n1");
            n3.on("input", function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: "<input message>" }); // (2) define input message
        });
    });
    it('should handle visionoperationsdelete()', function (done) {
        var flow = [
            { id: "n1", type: "cloud-vision-api", name: "cloud-vision-api", wires: [["n2"]],
                method: "visionoperationsdelete",
                visionoperationsdelete_name: "<node property>", // (1) define node properties
                visionoperationsdelete_key: "<node property>", // (1) define node properties
                visionoperationsdelete_accessToken: "<node property>", // (1) define node properties
                visionoperationsdelete_uploadProtocol: "<node property>", // (1) define node properties
                visionoperationsdelete_quotaUser: "<node property>", // (1) define node properties
                visionoperationsdelete_prettyPrint: "<node property>", // (1) define node properties
                visionoperationsdelete_uploadType: "<node property>", // (1) define node properties
                visionoperationsdelete_fields: "<node property>", // (1) define node properties
                visionoperationsdelete_callback: "<node property>", // (1) define node properties
                visionoperationsdelete_oauthToken: "<node property>", // (1) define node properties
                visionoperationsdelete_xgafv: "<node property>", // (1) define node properties
                visionoperationsdelete_alt: "<node property>", // (1) define node properties
                service: "n3" },
            { id: "n2", type: "cloud-vision-api-service" },
            { id: "n3", type: "helper" }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode("n3");
            var n1 = helper.getNode("n1");
            n3.on("input", function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: "<input message>" }); // (2) define input message
        });
    });
    it('should handle visionlocationsoperationsget()', function (done) {
        var flow = [
            { id: "n1", type: "cloud-vision-api", name: "cloud-vision-api", wires: [["n2"]],
                method: "visionlocationsoperationsget",
                visionlocationsoperationsget_name: "<node property>", // (1) define node properties
                visionlocationsoperationsget_key: "<node property>", // (1) define node properties
                visionlocationsoperationsget_accessToken: "<node property>", // (1) define node properties
                visionlocationsoperationsget_uploadProtocol: "<node property>", // (1) define node properties
                visionlocationsoperationsget_quotaUser: "<node property>", // (1) define node properties
                visionlocationsoperationsget_prettyPrint: "<node property>", // (1) define node properties
                visionlocationsoperationsget_uploadType: "<node property>", // (1) define node properties
                visionlocationsoperationsget_fields: "<node property>", // (1) define node properties
                visionlocationsoperationsget_callback: "<node property>", // (1) define node properties
                visionlocationsoperationsget_oauthToken: "<node property>", // (1) define node properties
                visionlocationsoperationsget_xgafv: "<node property>", // (1) define node properties
                visionlocationsoperationsget_alt: "<node property>", // (1) define node properties
                service: "n3" },
            { id: "n2", type: "cloud-vision-api-service" },
            { id: "n3", type: "helper" }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode("n3");
            var n1 = helper.getNode("n1");
            n3.on("input", function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: "<input message>" }); // (2) define input message
        });
    });
    it('should handle visionoperationscancel()', function (done) {
        var flow = [
            { id: "n1", type: "cloud-vision-api", name: "cloud-vision-api", wires: [["n2"]],
                method: "visionoperationscancel",
                visionoperationscancel_name: "<node property>", // (1) define node properties
                visionoperationscancel_body: "<node property>", // (1) define node properties
                visionoperationscancel_key: "<node property>", // (1) define node properties
                visionoperationscancel_accessToken: "<node property>", // (1) define node properties
                visionoperationscancel_uploadProtocol: "<node property>", // (1) define node properties
                visionoperationscancel_quotaUser: "<node property>", // (1) define node properties
                visionoperationscancel_prettyPrint: "<node property>", // (1) define node properties
                visionoperationscancel_uploadType: "<node property>", // (1) define node properties
                visionoperationscancel_fields: "<node property>", // (1) define node properties
                visionoperationscancel_callback: "<node property>", // (1) define node properties
                visionoperationscancel_oauthToken: "<node property>", // (1) define node properties
                visionoperationscancel_xgafv: "<node property>", // (1) define node properties
                visionoperationscancel_alt: "<node property>", // (1) define node properties
                service: "n3" },
            { id: "n2", type: "cloud-vision-api-service" },
            { id: "n3", type: "helper" }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode("n3");
            var n1 = helper.getNode("n1");
            n3.on("input", function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: "<input message>" }); // (2) define input message
        });
    });
});

